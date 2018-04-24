import Action from "./presenters/Action";
import DefaultActions from "./presenters/DefaultActions";
import HelpAction from "./presenters/HelpAction";
import Interactions from "./presenters/Interactions";
import Logo from "./presenters/Logo";
import LogoImage from "./presenters/LogoImage";
import NotificationsAction from "./presenters/NotificationsAction";
import ProfileAction from "./presenters/ProfileAction";
import TopNav from "./presenters/TopNav";

import "./top-nav.scss";

TopNav.Action = Action;
TopNav.DefaultActions = DefaultActions;
TopNav.HelpAction = HelpAction;
TopNav.Interactions = Interactions;
TopNav.Logo = Logo;
TopNav.LogoImage = LogoImage;
TopNav.NotificationsAction = NotificationsAction;
TopNav.ProfileAction = ProfileAction;

export {
  Action,
  DefaultActions,
  HelpAction,
  Interactions,
  Logo,
  LogoImage,
  NotificationsAction,
  ProfileAction
};

export default TopNav;
