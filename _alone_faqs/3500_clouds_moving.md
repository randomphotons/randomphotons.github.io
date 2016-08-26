---
header: Why don't the clouds move?
tags:
  - clouds
  - fake
---

Since this is a time-lapse, one might expect to see the clouds moving throughout the video. After all, I can see clouds moving from Earth in real time.

However, the ISS is a lot further away from the cloud layer than we are, and that distance changes how much movement is visible.

If we look at clouds from earth, the close ones are maybe a kilometre up. Cumulonimbus, or storm clouds, are about 8-13 km up. Let's call it **13 km** as the worst case. The ISS is between **409 km and 416 km** above us, so let's say it is **400 km** away from the cloud layer.

Let's imagine we are taking **two photos** of the same clouds at the same moment in time, one **from earth** looking straight up, the other **from the ISS** directly above it looking straight down. We use the same camera and the same lens settings for both, and for simplicity we make it **a square image** (Instagram style).

This will give us **two pyramids**, with the point being the camera, and the base being the cloud layer. If we calculate the dimensions of the base, we can determine how much cloud area each photo will cover.

A typical **50mm lens** on a **35mm sensor** will have a field of view of about **46°**. If we divide the pyramid in two we get two right-angled triangles, so we can use some Pythagorean geometry to calculate the area of the base.

We'll use the **altitude** as the height **(h)**, 23° (46°/2) as the angle (a), and then use TOA (tan of the angle = opposite over adjacent) to calculate half the base length. We then double that and square it to find the surface area. Anyway, here is the formula:

_(tan(26) x h x 2)^2 = area of the base_

When we plug in 13km for the Earth-bound photo, we get an area of 122 km<sup>2</sup>, or an **11 km x 11 km** square.

From the ISS at **400 km**, we get an area of **115,315 km<sup>2</sup>**, or **340 km x 340 km** of visible clouds.

That gives us a **ratio of 967:1** between the areas covered by the two photos.

That means that **every pixel** in the image from the ISS contains the equivalent of **967 pixels** from the earth-based photo. You will understandably lose a lot of detail.

If we were to angle the cameras towards the horizon, as most time lapses do, the ratio gets even worse.

Not only that, but given the speed of the ISS, a full orbit takes **90 minutes** at **7.66 km/s**. As such it would take only **44 seconds** for something to appear on one edge of the photo and disappear off the other edge. 

With the angle pointed towards the horizon, a given point will be visible for longer, but keep in mind that you lose exponentially more detail the further away the subject is as well. As such, anywhere you can see detail for of probably only on screen for maybe **3 minutes**.

All those things combined mean you don't see much change in clouds from the ISS.
