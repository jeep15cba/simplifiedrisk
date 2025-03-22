import CallToAction from "../components/homepage/call-to-action";
import Features from "../components/homepage/features-4";
import FooterSection from "../components/homepage/footer";
import HeroSection from "../components/homepage/hero-section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Features />
			<CallToAction />
			<FooterSection />
		</>
	);
}
