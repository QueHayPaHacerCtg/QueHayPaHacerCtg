import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';
import { WelcomePage } from './welcome/welcome';
import { InicioDeSesionPage } from './inicio-de-sesion/inicio-de-sesion';
import { CercaDeMPage } from './cerca-de-m/cerca-de-m';
import { RegistroPage } from './registro/registro';
import { SettingsPage } from './settings/settings';

import { TabsPage } from './tabs/tabs';

// The page the user lands on after opening the app and without a session
// export const FirstRunPage = CategoriasPage;
export const FirstRunPage = RegistroPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ListMasterPage;
export const Tab2Root = SearchPage;
export const Tab3Root = SettingsPage;
