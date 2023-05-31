export default function About() {
  return (
    <div className="about-container">
        <div className="about-image">
            <img src="/images/extras/audi-on-water.jpg" alt='about avatar' />
        </div>
        <div className="about-content">
            <h1 className="about-title">Don't squeeze in a sedan when you could relax in a car.</h1>
            <p className="about-paragraph-1">Our mission is enliven your road trip with the perfect travel car rental. Our cars are recertified before each trip to ensure your travel plans can go without a hitch. (Hitch cost extra 😉)</p>
            <p className="about-paragraph-2">Our team is full of carlife enthusiasts who kno firsthand the magical driving world of 4 wheels.</p>
            <aside className="about-aside">
                <h2 className="first-about-aside-h2">
                    Your destination is waiting
                </h2>
                <h2 className="second-about-aside-h2">
                    Your car is ready
                </h2>
                <button className="about-aside-button">Explore our cars</button>
            </aside>
        </div>
    </div>
  );
};