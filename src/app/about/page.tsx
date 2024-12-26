import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        About TastyBites
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/images/about.webp"
            alt="About Tasty Bites"
            width={580}
            height={580}
            className="rounded-lg shadow-lg object-cover w-full h-80"
          />
        </div>
        {/* Right Section: Text */}
        <div className="w-full lg:w-1/2 text-gray-700 space-y-4">
          <p className="text-lg">
            Welcome to <span className="font-semibold">TastyBites</span>, your
            ultimate destination for mouthwatering recipes, culinary tips, and
            foodie inspiration. Our blog is dedicated to bringing you the best
            recipes, from hearty comfort foods to quick snacks, desserts, and
            healthy meals.
          </p>
          <p className="text-lg">
            Whether you&apos;re a seasoned chef or just starting your cooking
            journey, we have something for everyone. Our step-by-step recipes
            and expert advice make it easy to explore new flavors and create
            delicious dishes for any occasion.
          </p>
          <p className="text-lg">
            At <span className="font-semibold">TastyBites</span>, we believe
            food brings people together, and we&apos;re here to celebrate the joy of
            cooking and sharing meals. So, grab your apron, and let&apos;s get
            cooking!
          </p>
        </div>
      </div>
      {/* Mission Section */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-700 mt-2">
          At TastyBites, our mission is to inspire home cooks to experiment, create, and enjoy the process of cooking. We aim to make every meal an opportunity to connect with loved ones and savor life&apos;s flavors.
        </p>
      </div>

      {/* Author Bio Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Meet the Chef</h2>
        <div className="flex flex-col items-center mt-4">
          <Image
            src="/images/chef.jpg"
            alt="Chef"
            width={128}
            height={128}
            className="rounded-full w-32 h-32 object-cover shadow-lg"
          />
          <p className="text-lg text-gray-700 mt-4">
            I&apos;m Safa, the founder and food enthusiast behind TastyBites. I&apos;ve been passionate about cooking for over 5 years, and I&apos;m here to share my love for food with you through simple, delicious recipes!
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Our Story</h2>
        <ul className="space-y-4 mt-4">
          <li className="text-lg text-gray-700 text-center">
            <strong>2020</strong> - Launched TastyBites as a hobby project.
          </li>
          <li className="text-lg text-gray-700 text-center">
            <strong>2021</strong> - Reached 10,000 readers and launched our first e-book.
          </li>
          <li className="text-lg text-gray-700 text-center">
            <strong>2023</strong> - Expanded the blog with video tutorials and cooking courses.
          </li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">What Our Readers Say</h2>
        <div className="flex justify-center space-x-8 mt-4">
          <div className="max-w-xs text-center">
            <p className="italic text-lg text-gray-700">
              &quot;TastyBites has transformed the way I cook! The recipes are easy to follow, and everything tastes amazing!&quot; - [Sara]
            </p>
          </div>
          <div className="max-w-xs text-center">
            <p className="italic text-lg text-gray-700">
              &quot;I love how diverse the recipes are. I’m always excited to try new things!&quot; - [Alex]
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Stay Connected</h2>
        <p className="text-lg text-gray-700 mt-4">
          Don&apos;t miss out on new recipes and cooking tips! Subscribe to our newsletter for weekly updates.
        </p>
        <button className="mt-4 bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
