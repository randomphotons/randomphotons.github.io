---
header: How do you calculate the curvature?
tags:
  - curvature
  - horizon
  - perspective
  - math
---

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