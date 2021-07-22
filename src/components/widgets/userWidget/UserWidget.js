import "./_userWidget.scss";
import AppsIcon from '@material-ui/icons/Apps';

const UserWidget = () => {
  const userUrl =
    "https://lh3.googleusercontent.com/ogw/ADea4I7Dz8wO9N1xzOyUGD0z__B6G0Oa_Vtvs5KPTVfl3w=s32-c-mo";
  return (
    <div className="user-widget">
      <AppsIcon size={28} className="user-widget__apps" />
      <img src={userUrl} alt="avatar" />
    </div>
  );
};

export default UserWidget;
