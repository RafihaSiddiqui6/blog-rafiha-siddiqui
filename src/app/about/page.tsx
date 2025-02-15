const AboutPage = () => {
  return (

    <div className="flex flex-col items-start justify-center px-6 md:px-12 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-6 self-center">
       <span className="text-blue-600 hover:text-blue-300">About <br/>Health & Fitness Blog</span>
      </h1>

      <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-justify">
        Welcome to <span className="font-bold hover:text-blue-400">Health & Fitness Blog</span> Hi there!
        Welcome to our corner of the web where health, fitness, and well-being take center stage. Our mission is simple: to inspire, motivate, and guide you on your journey toward a healthier, stronger, and more balanced lifestyle.
        Whether you are looking for practical fitness tips, healthy recipes, or ways to improve your mental well-being, we have you covered. Our team of fitness enthusiasts, health experts, and real-life success stories are here to provide you with the latest insights, advice, and resources to help you make lasting changes.
       We believe that health is not just about looking good it is about feeling your best, both physically and mentally. Every small step you take towards better health makes a big difference. Our goal is to be your trusted partner in this journey, offering support and encouragement every step of the way.
       Join us in transforming your life. Let’s embrace the power of health and fitness together!
      </p>

    

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 hover:text-blue-400">Why choose us to read?</h2>
        <ul className="list-disc list-inside space-y-2 text-start">
        <li>
      <strong>Expert Guidance:</strong> Our team consists of fitness professionals and health experts who provide scientifically-backed and practical advice to help you improve your lifestyle.
    </li>
    <li>
      <strong>Proven Results:</strong>We share real-life success stories and actionable tips that motivate you and help you achieve your health goals.
    </li>
    <li>
      <strong>Holistic Approach:</strong> We focus not just on physical fitness, but also on mental well-being and balanced nutrition, ensuring you lead a healthier and happier life.
    </li>
    <li>
      <strong>Personalized Advice:</strong>We understand your specific needs and goals, offering customized health and fitness plans tailored to your lifestyle and preferences.
    </li>
    <li>
      <strong>Community Support:</strong> We provide a supportive and encouraging community where you can share your experiences and learn from others.
        </li>
        </ul>
      </div>

      <div className="mt-10 max-w-3xl text-2xl font-semibold mb-4 hover:text-blue-400">
       <a href="/contact">Share Feedback with us</a> 
      </div>
    </div>
  );
};

export default AboutPage;
