import Actions from "./presenters/Action";
import DefaultActions from "./presenters/DefaultActions";
import HelpAction from "./presenters/HelpAction";
import Interactions from "./presenters/Interactions";
import Logo from "./presenters/Logo";
import LogoImage from "./presenters/LogoImage";
import MenuAction from "./presenters/MenuAction";
import NotificationsAction from "./presenters/NotificationsAction";
import ProfileAction from "./presenters/ProfileAction";
import ProfileContent from "./presenters/ProfileContent";
import TopNav from "./presenters/TopNav";

import "./top-nav.scss";

TopNav.Actions = Actions;
TopNav.DefaultActions = DefaultActions;
TopNav.HelpAction = HelpAction;
TopNav.Interactions = Interactions;
TopNav.Logo = Logo;
TopNav.LogoImage = LogoImage;
TopNav.MenuAction = MenuAction;
TopNav.NotificationsAction = NotificationsAction;
TopNav.ProfileAction = ProfileAction;
TopNav.ProfileContent = ProfileContent;

export { Actions, Interactions, LogoImage };
export default TopNav;
