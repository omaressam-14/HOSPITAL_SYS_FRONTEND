import styles from "./Features.module.css";
import { FcAssistant } from "react-icons/fc";
import { FcElectricalSensor } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

function FeatureCard({ icon, header, description }) {
  return (
    <div className="flex flex-col gap-3 items-center md:items-start w-[100%]">
      <span>{icon}</span>
      <h3 className="text-[1.2rem] font-bold text-slate-800 uppercase">
        {header}
      </h3>
      <p className="text-sm text-slate-500 capitalize">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <div className={styles.feature}>
      <FeatureCard
        icon={<FcAssistant size={50} />}
        header="Support"
        description="We are working 24/7 to help you"
      />
      <FeatureCard
        icon={<FcElectricalSensor size={50} />}
        header="Care"
        description="we are continously care about you"
      />
      <FeatureCard
        icon={<FcApproval size={50} />}
        header="Trust"
        description="our doctors are the best and will help you"
      />
    </div>
  );
}

export default Features;
