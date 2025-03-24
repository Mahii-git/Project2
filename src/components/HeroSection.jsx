import React from 'react';
const HeroSection = () => {
  return (
    <section class="p-10 bg-white">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center"><button>
                <img src="https://www.ubereats.com/_static/88d55f7112efe55f.webp" alt="Order food for employees" class="w-full rounded-lg"/>
                <h3 class="text-xl font-bold mt-4">Order food for your employees</h3>
                <a href="#" class="text-black-600 underline">Create a business account</a></button>
            </div>
            <div class="text-center"><button>
                <img src="https://www.ubereats.com/_static/711d51ca1b458931.webp" alt="Delivery service for restaurant" class="w-full rounded-lg"/>
                <h3 class="text-xl font-bold mt-4">A delivery service for your restaurant</h3>
                <a href="#" class="text-black-600 underline">Add your restaurant</a></button>
            </div>
            <div class="text-center"><button>
                <img src="https://www.ubereats.com/_static/16522a701585873b.webp" alt="Deliver via Uber Eats" class="w-full rounded-lg"/>
                <h3 class="text-xl font-bold mt-4">Deliver via Uber Eats</h3>
                <a href="#" class="text-black-600 underline">Register as a courier</a></button>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
