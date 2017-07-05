---
header: Can you really see curvature at 400km altitude?
tags:
  - curvature
  - perspective
  - cgi
---

There are a few steps we need to take to determine if the curve will be visible from the ISS.

1. Determine how far away the horizon is.
2. Estimate how wide the visible distance on the horizon is (the 'field of view').
3. Compare that to the circumference of the Earth.

Time to bust out some mathematics again. 

**1. Horizon Distance**

According to [Wikipedia](https://en.wikipedia.org/wiki/Horizon#Exact_formula_for_a_spherical_Earth) the  'exact formula for a spherical earth' is:

```
d = √(2Rh + h^2)
```

Where `R` is the radius of the Earth (about [6,371 km](https://en.wikipedia.org/wiki/Earth_radius)) and `h` is the hight above the surface (about [400 km](http://www.heavens-above.com/IssHeight.aspx)). Plug this in and we get:

```
d = √(2 x 6,317 x 400 + 400^2)
d = 2,293
```

So, we have a *horizon distance* of about **2,293 km** (about 1,424 miles).

**2. Field of View**

The width of the visible horizon we actually see depends on *how* we are seeing it. With the naked eye, we can see around 120-200º, however much of that is our 'peripheral' vision. The 'useful' range is [about 40-60º](http://www.cambridgeincolour.com/tutorials/cameras-vs-human-eye.htm#angle-of-view). This is quite similar to a 50mm lens on a 35mm 'full frame' camera, such as the Nikons used on the ISS.

Let's use 50º as an average image width for the human eye or 50mm lens. Since the horizon will be the same distance away no matter which direction we look in, we'll calculate how much 50º of the circumference of a 2,293 km circle will be, and that tells us the visible width of the horizon:

```
x = 2πr x 50/360
x = 2 x 3.14 x 2,293 km * 50/360
x = 2,001 km
```

So, our visible horizon width with a **50º** field of view from the ISS will be about **2,000 km**.

**3. Comparison to Circumference**

Using the same formula, we can calculate the circumference of the Earth:

```
y = 2πR
y = 2 x 3.14 x 6,371 km
y = 40,030 km
```

This means that our *visible horizon* or **2,000 km** is about **5%** of the Earth's radius. This comes to about an 18º (out of 360º) arc, which would look like this:

[![Curvature of the Earth](/images/alone/iss_horizon.svg)](/images/alone/iss_horizon.svg)
[*Click to zoom in*](/images/alone/iss_horizon.svg)

You will get some additional curvature depending on the lens. The wider-angle the lens is, the more of the horizon you will see, and the more the lens itself will curve the image as you get closer to the edge of frame. However, if the horizon is near the centre of the frame it will generally be pretty close to reality.

[Felix Baumgartner](https://youtu.be/FHtvDA0W34I?t=51s) was shot with a very wide lens, for example, and you get some very exaggerated curve in his footage. The footage in *All Alone in the Night* is nowhere near that exaggerated, and you will note that it generally matches up with the curve in the image above.