/* eslint-disable react/prop-types */
import icon from "../assets/ai-icon.svg";
import "./onboarding.css"
export default function Layout({ children }) {
  return <div className="onboard_layout_wrapper">
    <div className="onboard_layout_left_screen">
      <div className="onboard_layout_left_screen_img-container">
        {/* <img src={icon} /> */}
      </div>
    </div>
    <div className="onboard_layout_right_screen">
      <div className="onboard_layout_right_form_wrapper">
        <div className="layout_app_title">
          THA AI
        </div>
        <div className="onboard_layout_right_screen_form_container">
          {children}
        </div>
      </div>
    </div>
  </div>;
}

