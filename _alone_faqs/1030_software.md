---
header: What software was used to make it?
tags:
  - software
  - editing
---

There were three main steps for this project.

1. Downloading the individual high-resolution photos from [NASA](http://eol.jsc.nasa.gov/).
2. Combining the sequences into a video file.
3. Editing the sequences into the final video.

For **Stage 1**, it was a combination of custom **bash scripts** to download and request the high-resolution images, and an **FTP client** to download them from NASA.

For **Stage 2**, I used an app from the Mac App Store called **[Time-Lapse](https://itunes.apple.com/au/app/time-lapse/id451563308?mt=12)** to compile each of the sequences into a single video.

For **Stage 3**, I used **[Final Cut Pro X](http://www.apple.com/final-cut-pro/)**. In particular, I used the **'Optical Flow'** option for slowing down the sequences to about half their original speed. This helped smooth the journey, but resulted in some interesting ['ripple' artifacts](#ripples).