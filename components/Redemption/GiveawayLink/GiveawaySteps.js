import { useRouter } from "next/router";

const GiveawaySteps = () => {
  const router = useRouter();
  return (
    <ul className="step-progress">
      <li className={router.pathname == "/redemption/select-product" ? "active" : ""}>
        <div className="step-progress__item">
          <span>1</span>
          Select Product
        </div>
      </li>
      <li className={router.pathname == "/redemption/giveaway-details" ? "active" : ""}>
        <div className="step-progress__item">
          <span>2</span>
          Giveway Details
        </div>
      </li>
      <li className={router.pathname == "/redemption/customize" ? "active" : ""}>
        <div className="step-progress__item">
          <span>3</span>
          Customize
        </div>
      </li>
      <li className={router.pathname == "/redemption/publish" ? "active" : ""}>
        <div className="step-progress__item">
          <span>4</span>
          Publish
        </div>
      </li>
    </ul>
  )
}

export default GiveawaySteps;
