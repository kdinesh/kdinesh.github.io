---
layout: default
title: Welcome to the Clean Campus Committee
permalink: /
---

<div class="page-hero-image">
  <img src="{{ '/assets/images/ccchome1.png' | relative_url }}" alt="A scenic view of the IIT Palakkad campus">
</div>

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


<style>
.page-hero-image {
  margin-top: 1.5rem;    /* Space above the image */
  margin-bottom: 1.5rem; /* Space below the image */
  text-align: center;    /* Centers the image if it's narrower than the container */
}

.page-hero-image img {
  max-width: 100%;       /* Ensures image is responsive and doesn't overflow */
  height: auto;          /* Maintains aspect ratio */
  max-height: 450px;     /* Optional: Constrains the image height. Adjust as needed. */
  border-radius: 8px;    /* Optional: Adds rounded corners */
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* Optional: Adds a subtle shadow */
}
.button-link {
  display: inline-block;
  background-color: var(--text-yellow);
  color: var(--white);
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
.button-link:hover {
  background-color: var(--text-yellow-hover);
  color: var(--white);
}
</style>


Join us in making our campus a model of cleanliness and sustainability!