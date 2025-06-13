---
layout: default
title: Welcome to the Clean Campus Committee
permalink: /
---


## Welcome to the Clean Campus Committee (CCC)

The Clean Campus Committee (CCC) is dedicated to fostering a clean, sustainable, and vibrant environment at the Indian Institute of Technology. We believe that a pristine campus enhances the quality of life, promotes well-being, and inspires excellence.



### Our Vision
To cultivate a campus culture where cleanliness and environmental responsibility are integral to our daily lives, ensuring a healthy and inspiring atmosphere for all students, faculty, and staff.



### Key Focus Areas & Activities

Our efforts are organized across several key zones within the campus, each with specific activities aimed at maintaining and improving our surroundings.

### Events

{% for entry in site.data.events.list %}
  <div>
    <p><strong>Name:</strong> {{ entry.name }}</p>
    <p><strong>Year:</strong> {{ entry.year }}</p>
    <p><strong>Roll No.:</strong> {{ entry.rollno }}</p>
    <p><strong>FA email:</strong> {{ entry.faemail }}</p>
  </div>
{% endfor %}


Join us in making our campus a model of cleanliness and sustainability!