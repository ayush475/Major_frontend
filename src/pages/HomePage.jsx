import React from 'react';
import { FaLeaf, FaUtensils, FaChartLine } from 'react-icons/fa'; // Import icons from Font Awesome


const HomePage = () => {
    return (
        <>
            <header className="bg-gray-900 text-white py-24 z-100">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">FOOD GEN AI</h1>
                    <p className="text-lg md:text-xl mb-8">Discover the Future of Food Generation</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Get Started
                    </button>
                </div>
            </header>
            <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                <div className="flex items-center justify-center w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
                    <div className="mr-4">
                        <FaLeaf className="text-4xl text-green-500" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Healthy Ingredients</h3>
                        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
                    <div className="mr-4">
                        <FaUtensils className="text-4xl text-yellow-500" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Delicious Recipes</h3>
                        <p className="text-base">Duis sodales ligula sit amet libero elementum, ut blandit purus consequat.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
                    <div className="mr-4">
                        <FaChartLine className="text-4xl text-blue-500" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Nutritional Insights</h3>
                        <p className="text-base">Integer aliquet vestibulum ex, a fermentum mi vehicula ac.</p>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-12 px-4 lg:px-8 flex flex-row lg:flex-row items-center">
    <div className="w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
        <img src="../src/assets/dashboard.jpg" alt="Image 1" className="w-full rounded-lg" />
    </div>
    <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Section 1 Description</h2>
        <p className="text-lg mb-4">
            Description text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elit eu lectus scelerisque ullamcorper.
        </p>
        <p className="text-lg">
            More description text goes here. Duis sodales ligula sit amet libero elementum, ut blandit purus consequat.
        </p>
    </div>
</section>

            {/* Section with Image on Right, Description on Left */}
            <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pl-8 mb-4 lg:mb-0">
          <img src="../src/assets/dashboard.jpg" alt="Image 2" className="w-full rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2 lg:pr-8 lg:order-first">
          <h2 className="text-2xl font-semibold mb-4">Section 2 Description</h2>
          <p className="text-lg mb-4">
            Description text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elit eu lectus scelerisque ullamcorper.
          </p>
          <p className="text-lg">
            More description text goes here. Duis sodales ligula sit amet libero elementum, ut blandit purus consequat.
          </p>
        </div>
      </section>
      <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
                    <img src="../src/assets/dashboard.jpg" alt="Image 1" className="w-full rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">Section 1 Description</h2>
                    <p className="text-lg mb-4">
                        Description text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elit eu lectus scelerisque ullamcorper.
                    </p>
                    <p className="text-lg">
                        More description text goes here. Duis sodales ligula sit amet libero elementum, ut blandit purus consequat.
                    </p>
                </div>
            </section>

  

        </>
    );
};

export default HomePage;
