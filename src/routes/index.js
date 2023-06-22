//Pages
import Home from '~/pages/Home';
import Library from '~/pages/Library';
import Login from '~/pages/Login';
import Upload from '~/pages/Upload';

//Layouts
import { HeaderOnly } from '~/components/Layout';

//dùng cho các trang không cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/library', component: Library },
    { path: '/login', component: Login, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

//dùng cho các trang cần đăng nhập mới sử dụng được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
