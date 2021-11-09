// React
import { Switch, Route } from "react-router-dom";

// Pages
import CreateGame from "./pages/CreateGame/CreateGame";
import ViewGame from "./pages/ViewGame/ViewGame";
import Header from "./components/Header/Header";
import CreateGenre from "./pages/CreateGenre/CreateGenre";
import UpdateGame from "./pages/UpdateGame/UpdateGame";
import DeleteGame from "./pages/DeleteGame/DeleteGame";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import CreateUser from "./pages/CreateUser/CreateUser";
import ViewUser from "./pages/ViewUser/ViewUser";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
import ViewProfile from "./pages/ViewProfile/ViewProfile";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import DeleteUser from "./pages/DeleteUser/DeleteUser";
import ViewGenre from "./pages/ViewGenre/ViewGenre";
import UpdateGenre from "./pages/UpdateGenre/UpdateGenre";
import DeleteGenre from "./pages/DeleteGenre/DeleteGenre";
import AddCard from "./components/AddCard/AddCard";
import ViewCard from "./components/ViewCard/ViewCard";
import DeleteProfile from "./pages/DeleteProfile/DeleteProfile";
import InformGame from "./components/InformGame/InformGame";


import { Home } from "./pages/Home/Home";
import { UserList } from "./components/UserList/UserList";
import { GenreList } from "./components/GenreList/GenreList";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";


// CSS
import "./App.css";
import "./styles/view.css"
import "./styles/form.css";
import "./pages/Login/login.css"
import "./styles/card.css";
import "./styles/menucard.css";
import "./styles/cardinform.css"
import { FavoriteGame } from "./pages/FavoriteGame/FavoriteGame";






export function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />

          <Route path="/login" component={Login} />

          <GuardedRoute path="/logout" component={Logout} />

          <GuardedRoute path="/guarded" component={Home} />

          {/* <GuardedRoute
                        path="/game/create"
                        component={CreateGame}
                    /> */}

          {/* Games  */}

          <GuardedRoute path="/game/inform" component={InformGame} />

          <GuardedRoute path="/game/create" component={CreateGame} />

          <GuardedRoute path="/game/view/:id" component={ViewGame} />

          <GuardedRoute path="/game/update/:id" component={UpdateGame} />

          <GuardedRoute path="/game/delete/:id" component={DeleteGame} />

          <GuardedRoute path="/game/favorite" component={FavoriteGame} />
          

          
          
          
          
          
          <GuardedRoute path="/genre/create" component={CreateGenre} />

          <GuardedRoute path="/genre/view/all" component={GenreList} />

          <GuardedRoute path="/genre/view/:id"  component={ViewGenre} />

          <GuardedRoute path="/genre/update/:id" component={UpdateGenre} />

          <GuardedRoute path="/genre/delete/:id" component={DeleteGenre} />
          
          
          
          
          
          <Route path="/user/create" component={CreateUser} />

          <GuardedRoute path="/user/list" component={UserList} />         


          <GuardedRoute path="/user/view/:id" component={ViewUser} />

          <GuardedRoute path="/user/update/:id" component={UpdateUser} />

          <Route path="/user/delete/:id" component={DeleteUser} />



         
          <GuardedRoute path="/profile/view/:id" component={ViewProfile} />
          
          <GuardedRoute path="/profile/update/:id" component={UpdateProfile} />

          <GuardedRoute path="/profile/delete/:id" component={DeleteProfile} />




          <GuardedRoute path="/add" component={AddCard} />

          <GuardedRoute path="/view" component={ViewCard} />



        </Switch>
      </div>
    </div>
  );
}
