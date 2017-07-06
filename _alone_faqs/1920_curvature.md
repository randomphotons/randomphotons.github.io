---
header: Can you really see curvature from the ISS?
tags:
  - curvature
  - horizon
  - perspective
  - cgi
---

The ISS's altitude isn't high enough to see the full curve of the earth. However, it can see a reasonably large segment of the earth, enough to see a curve on that segment. Here are some scale diagrams to help illustrate it:

Firstly, here is a scale diagram of the earth and the ISS (click to zoom in):

[![Curvature of the Earth](/images/alone/iss_horizon_earth.svg)](/images/alone/iss_horizon_earth.svg)

The <span style="color: red">red line</span> is the visible horizon from the ISS at an altitude of **400 km**.

Next, here is an overhead view, looking down towards the ISS, with the red circle being the visible horizon from the ISS:

[![Horizon Overhead](/images/alone/iss_horizon_overhead.svg)](/images/alone/iss_horizon_overhead.svg)

The <span style="color: red">red circle</span> is the horizon, the same as the red line in the first diagram, looking down from 90º. The black **"Flat Horizon"** is a tangent to the Earth's horizon, and is what would be visible as a straight line when looking at the horizon from the ISS. The <span style="color: orange">orange lines</span> indicate a field of view of **100º** when using a **15 mm lens** on a **35mm sensor**, as was the case for most of these sequences.

Here are the same details, from an off-centre perspective:

<a href="/images/alone/iss_horizon_perspective.png"><img src="/images/alone/iss_horizon_perspective.png" style="width: 100%" alt="ISS Horizon Perspective"/></a>

And here is the view you get from the ISS, looking directly at the horizon, with the specified <span style="color: orange">field of view</span>:

<a href="/images/alone/iss_horizon_pov.png"><img src="/images/alone/iss_horizon_pov.png" style="width: 100%" alt="ISS Horizon POV"/></a>

So, here is the math, if you want to dive in.

There are a few steps we need to take to figure this out mathematically. Here is what we know at the beginning:

* The radius of the Earth (*R*): <span style="color: green">**6,367 km**</span>
* The altitude of the ISS (*h*): <span style="color: blue">**400 km**</span>

Both the radius of the earth and the altitude of the ISS vary slightly depending on where you are. These numbers fit within the range.

Now, we calculate the distance to the horizon using this rule: the tangent between any point and a single point of a circle will be perpendicular to the centre of the circle. That point of tangency is our horizon, and we can calculate it using Pythagoras classic theorum:

![A^2 + B^2 = C^2](http://latex.codecogs.com/gif.latex?A%5E2%20&plus;%20B%5E2%20%3D%20C%5E2)

In our case *A* is the Earth's radius (*R*), and *B* is the distance from the ISS to the horizon (*d*), and *C* is the distance from the ISS to the centre of the Earth (*h*):

![R^2 + d^2 = (R+h)^2](http://latex.codecogs.com/gif.latex?R%5E2%20&plus;%20d%5E2%20%3D%20%28R&plus;h%29%5E2)<br/>
![d^2 = (R+h)^2 - R^2](http://latex.codecogs.com/gif.latex?d%5E2%20%3D%20%28R&plus;h%29%5E2%20-%20R%5E2)<br/>
![d = \sqrt{(R+h)^2 - R^2}](http://latex.codecogs.com/gif.latex?d%20%3D%20%5Csqrt%7B%28R&plus;h%29%5E2%20-%20R%5E2%7D)<br/>
![d = \sqrt{(6367+400)^2 - 6367^2}](http://latex.codecogs.com/gif.latex?d%20%3D%20%5Csqrt%7B%286367&plus;400%29%5E2%20-%206367%5E2%7D)<br/>
![d = 2,292 km](http://latex.codecogs.com/gif.latex?d%20%3D%202%2C292%20km)<br/>

So, we have a new value:

* The distance from the ISS to the horizon (*d*): <span style="color: purple">**2,292 km**</span>

We can now calculate the angle between the <span style="color: purple">*d*</span> and the <span style="color: red">horizon line</span> (*z*) (in red in the diagram):

![z = \arccos(R / (R+h))](http://latex.codecogs.com/gif.latex?z%20%3D%20%5Carccos%28R%20/%20%28R&plus;h%29%29)<br/>
![z = 19.8](http://latex.codecogs.com/gif.latex?z%20%3D%2019.8)<br/>

* The angle between the ISS and the horizon line (*z*): <span color="black">**19.8º**</span>

Now, we can calculate the radius of the horizon line (*a*) and the distance between the ISS and the horizon line (*o*) like so:


![a = cos(z) * d](http://latex.codecogs.com/gif.latex?a%20%3D%20cos%28z%29%20*%20d)<br/>
![a = cos(19.8) * 2,292 = 2156.6](http://latex.codecogs.com/gif.latex?a%20%3D%20cos%2819.8%29%20*%202%2C292%20%3D%202156.6)<br/>

![o = sin(z) * d](http://latex.codecogs.com/gif.latex?o%20%3D%20sin%28z%29%20*%20d)<br/>
![o = sin(19.8) * 2,292 = 776.3](http://latex.codecogs.com/gif.latex?o%20%3D%20sin%2819.8%29%20*%202%2C292%20%3D%20776.3)<br/>

* The radius of the horizon line (*a*): <span style="color: red">**2,156.6 km**</span>
* The perpendicular distance from the ISS to the horizon line (*o*): <span style="color: blue">**776.3 km**</span>

This gives us a handy way of creating a physical scale model to see the curve in action ourselves. If we divide *o* by *a*, we get a ratio *y* for viewing height to the horizon radius:

![o/a = 776.3/2156.6 = 0.36](http://latex.codecogs.com/gif.latex?y%20%3D%20o/a%20%3D%20776.3/2156.6%20%3D%200.36)<br/>

We can now apply this to creating a flat circle of an appropriate scale to your eye level:

![radius = eyelevel * 0.36](http://latex.codecogs.com/gif.latex?radius%20%3D%20eyelevel%20*%200.36)

For example, if your eye level is at 6', you can set up a circle on the ground like so:

<a href="/images/alone/iss_horizon_scaled.png"><img src="/images/alone/iss_horizon_scaled.png" style="width: 100%" alt="ISS Horizon Scaled"/></a>

When you stand in the centre of the circle and look at the horizon, you can see the curve of the horizon at roughly the same perspective as on the ISS.



