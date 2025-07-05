import React from 'react';
import { OmasStoree } from '../../../Resources/OmasStore';
import { Link } from 'react-router-dom';

function OmasStore() {
  return (
    <div className="w-full px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* ──────── Text Section ──────── */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Babakazo Store</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Welcome to Babakazo Store, Nigeria's premier destination for premium footwear, offering the latest trends in sneakers, 
            formal shoes, sandals, and athletic footwear for men, women, and children.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Our Footwear Collections:</h3>

          <div className="space-y-4 text-sm text-gray-700">
            {/* Sneakers */}
            <div>
              <strong className="text-black">Trendsetting Sneakers</strong>
              <p>
                Explore our curated selection of high-quality sneakers from top global brands. From classic designs to 
                limited editions, we have the perfect pair for every style and occasion.
              </p>
            </div>

            {/* Formal Shoes */}
            <div>
              <strong className="text-black">Elegant Formal Footwear</strong>
              <p>
                Step out in style with our collection of premium leather shoes, perfect for business and formal events. 
                Crafted for comfort and durability.
              </p>
            </div>

            {/* Athletic Shoes */}
            <div>
              <strong className="text-black">Performance Athletic Shoes</strong>
              <p>
                Maximize your performance with our range of running, training, and sports shoes designed for athletes 
                and fitness enthusiasts.
              </p>
            </div>

            {/* Sandals */}
            <div>
              <strong className="text-black">Comfortable Sandals</strong>
              <p>
                Stay comfortable in any weather with our selection of stylish sandals and slides for men and women.
              </p>
            </div>

            {/* Trust Factors */}
            <div>
              <strong className="text-black">Why Choose Sole Haven?</strong>
              <p>
                We're committed to providing authentic, high-quality footwear at competitive prices. All our products 
                come directly from authorized suppliers with full manufacturer warranties.
              </p>
            </div>

            {/* Security */}
            <div>
              <strong className="text-black">Hassle-Free Shopping</strong>
              <p>
                Enjoy secure checkout, multiple payment options, and reliable delivery services across Nigeria.
              </p>
            </div>

            {/* Final Note */}
            <p className="font-semibold text-black mt-4">
              Experience the perfect blend of style, comfort, and quality. Walk with confidence - shop at Sole Haven today.
            </p>

            {/* Signature */}
            <img
              src="https://htmlbeans.com/html/botanical/images/signature.png"
              alt="signature"
              className="h-14 w-30 mt-6"
              loading="lazy"
            />

            <p className="text-black mt-4 text-sm md:text-base">
              <strong>Adebayo Johnson – Founder</strong>
            </p>
          </div>
        </div>

        {/* ──────── Product Grid Section ──────── */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold text-center mb-4">Featured Footwear:</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {OmasStoree.map((item) => (
              <Link
                key={item.id}
                className="border border-gray-200 p-4 flex flex-col items-center rounded shadow-sm bg-white w-full"
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-40 object-contain mb-4"
                />
                <p className="text-gray-600 text-center text-sm line-clamp-2">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OmasStore;