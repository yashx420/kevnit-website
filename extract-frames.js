const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const ffprobeStatic = require("ffprobe-static");
const path = require("path");
const fs = require("fs");

ffmpeg.setFfmpegPath(ffmpegStatic);
ffmpeg.setFfprobePath(ffprobeStatic.path);

const inputVideo = path.join(__dirname, "public", "hero_video.mp4");
const outputDir = path.join(__dirname, "public", "hero_frames");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

ffmpeg.ffprobe(inputVideo, (err, metadata) => {
  if (err) {
    console.error("Error probing video:", err);
    process.exit(1);
  }

  const duration = metadata.format.duration;
  const videoStream = metadata.streams.find((s) => s.codec_type === "video");
  const fps = eval(videoStream.r_frame_rate);

  console.log(`Video duration: ${duration}s`);
  console.log(`Video FPS: ${fps}`);
  console.log(`Video resolution: ${videoStream.width}x${videoStream.height}`);

  const extractFps = 15;
  const expectedFrames = Math.ceil(duration * extractFps);
  console.log(`Extracting ~${expectedFrames} frames at ${extractFps} fps...`);

  ffmpeg(inputVideo)
    .outputOptions([`-vf`, `fps=${extractFps},scale=1920:-1`, `-q:v`, `3`])
    .output(path.join(outputDir, "frame_%04d.jpg"))
    .on("start", (cmd) => {
      console.log("FFmpeg command:", cmd);
    })
    .on("progress", (progress) => {
      if (progress.percent) {
        process.stdout.write(`\rProgress: ${Math.round(progress.percent)}%`);
      }
    })
    .on("end", () => {
      const frames = fs
        .readdirSync(outputDir)
        .filter((f) => f.endsWith(".jpg"));
      console.log(`\nDone! Extracted ${frames.length} frames to ${outputDir}`);
    })
    .on("error", (err) => {
      console.error("Error extracting frames:", err);
      process.exit(1);
    })
    .run();
});
