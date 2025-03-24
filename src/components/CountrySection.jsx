import React from 'react';

const CountrySection = () => {
  return (
    <section>
      <div class="max-w-8xl mx-auto bg-white p-8 rounded-lg shadow-md">
    <div class="mt-4 text-right">
        <a href="#" class="text-blue-600 font-semibold hover:underline">Show all countries</a>
    </div>
    <h1 class="text-2xl font-bold mb-4">Countries where <span class="text-black font-bold">Uber Eats</span> is available</h1>
    <div class="grid grid-cols-4 gap-4 text-black-200">
        <ul>
            <li>Australia</li>
            <li>Belgium</li>
            <li>Chile</li>
            <li>Costa Rica</li>
            <li>Germany</li>
            <li>Dominican Republic</li>
            <li>Ecuador</li>
            <li>El Salvador</li>
        </ul>
        <ul>
            <li>France</li>
            <li>Great Britain</li>
            <li>Guatemala</li>
            <li>Ireland</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Canada</li>
            <li>Kenya</li>
        </ul>
        <ul>
            <li>Luxembourg</li>
            <li>Mexico</li>
            <li>New Zealand</li>
            <li>Netherlands</li>
            <li>Panama</li>
            <li>Poland</li>
            <li>Portugal</li>
            <li>Sweden</li>
        </ul>
        <ul>
            <li>Switzerland</li>
            <li>Spain</li>
            <li>Sri Lanka</li>
            <li>South Africa</li>
            <li>Taiwan (PRC)</li>
            <li>United States of America</li>
        </ul>
               </div>
               
               <div class="mt-14 text-center">
               <button class="px-4 py-2 ">This is how Uber Eats ranks the results.
                <a href="#" class="hover:underline"> Learn more about the ranking</a>
            </button></div>

</div>
    </section>
  );
};

export default CountrySection;
