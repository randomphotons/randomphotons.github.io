---
header: Why don't the clouds move?
tags:
  - clouds
  - cgi
---

Since this is a time-lapse, one might expect to see the clouds moving throughout the video. After all, we can see clouds moving from Earth in real time.

However, the ISS is a lot further away from the cloud layer than we are, and that distance changes how much movement is visible.

Cumulonimbus, or storm clouds, are at most **13 km** above us. The ISS is between **409 km and 416 km** above us, so let's say it is **400 km** away from the cloud layer.

Let's imagine we are taking **two square photos** of the same clouds at the same moment in time with the same type of camera - one **from earth** looking straight up, the other **from the ISS** directly above it looking straight down.

This will give us **two pyramids**, with the point being the camera, and the base being the cloud layer. Something like this:

![](/images/alone/iss_vs_earth_side.svg)
<label>Credit: David Peterson</label>

If we calculate the dimensions of the bases, we can determine how much cloud area each photo will cover.

A typical **50 mm lens** on a **35 mm sensor** will have a field of view of about **46°**. If we divide the pyramid in two we get two right-angled triangles, so we can use some Pythagorean geometry to calculate the area of the base. Here is the formula:

_(tan(26) x h x 2)<sup>2</sup> = area of the base_

When we plug in **13 km** for the Earth-bound photo, we get an area of **122 km<sup>2</sup>**, or an **11 km x 11 km** square.

From the ISS at **400 km**, we get an area of **115,315 km<sup>2</sup>**, or **340 km x 340 km** of visible clouds.

That gives us a **ratio of 967:1** between the areas covered by the two photos. Here is what that would look like:

![ISS vs Earth photo scale](/images/alone/iss_vs_earth.svg)
<label>Credit: David Peterson</label>

The **blue** is the area covered by the photo from the **ISS**. The **red** is the area covered by the photo from **Earth**. You will understandably lose a lot of detail.

Not only that, but given the speed of the ISS, a full orbit takes **90 minutes** travelling at **7.66 km/s**. As such it would take only **44 seconds** for something to appear on one edge of the photo and disappear off the other edge. 

All those things combined mean you don't see much change in clouds from the ISS.
