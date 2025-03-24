import React from 'react';

const Services = () => {
  return (
    <section>
      <div class="max-w-8xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <div class="mt-4 text-left">
                  <h2 class="text-2xl font-bold">Uber <span className="font-bold">Eats</span></h2>
                </div>
                <div class=" flex item-center justify-around mt-6 p-2 id-cols-1 md:grid-cols-3 gap-8">
                  <ul className="space-y-2 text-semibold">
                    <li><a href="#" class="hover:underline">Get help</a></li>
                    <li><a href="#" class="hover:underline">Add your restaurant</a></li>
                    <li><a href="#" class="hover:underline">Register as a courier</a></li>
                    <li><a href="#" class="hover:underline">Create a business account</a></li>
                  </ul>
                  <div class="flex item-center justify-around mt-6 p-2 id-cols-1 md:grid-cols-3 gap-8">
                  <ul className="space-y-2 text-semibold">
                    <li><a href="#" class="hover:underline">Restaurants near me</a></li>
                    <li><a href="#" class="hover:underline">Show all cities</a></li>
                    <li><a href="#" class="hover:underline">Show all countries</a></li>
                    <li><a href="#" class="hover:underline">For pickup near me</a></li>
                    <li><a href="#" class="hover:underline">Buy groceries</a></li>
                    <li><a href="#" class="hover:underline">About Uber Eats</a></li>
                    
                        <a href="#" class="flex items-center hover:underline">
                          <span class="mr-2">🌍</span> German
                        </a>
                  </ul>
                </div>
                </div>
                
              <div class="flex items-center justify-between mt-6">
                <div class="flex space-x-4">
                  <a href="#" class="block w-32"><img src="https://www.ubereats.com/_static/c37b03da0ee5a6a9.svg" alt="Download on the App Store" /></a>
                  <a href="#" class="block w-20"><img src="https://www.ubereats.com/_static/3aebcdc018e1ee5e.png" alt="Get it on Google Play" /></a>
                </div>
                </div>
              </div>
    </section>
  );
};

export default Services;

