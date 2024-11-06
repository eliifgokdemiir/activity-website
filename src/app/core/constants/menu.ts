import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: '',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Anasayfa',
          route: '/dashboard/nfts',
        },
        // {
        //   icon: 'assets/icons/heroicons/outline/lock-closed.svg',
        //   label: 'Auth',
        //   route: '/auth',
        //   children: [
        //     { label: 'Sign up', route: '/auth/sign-up' },
        //     { label: 'Sign in', route: '/auth/sign-in' },
        //     { label: 'Forgot Password', route: '/auth/forgot-password' },
        //     { label: 'New Password', route: '/auth/new-password' },
        //     { label: 'Two Steps', route: '/auth/two-steps' },
        //   ],
        // },
        // {
        //   icon: 'assets/icons/heroicons/outline/exclamation-triangle.svg',
        //   label: 'Errors',
        //   route: '/errors',
        //   children: [
        //     { label: '404', route: '/errors/404' },
        //     { label: '500', route: '/errors/500' },
        //   ],
        // },
        // {
        //   icon: 'assets/icons/heroicons/outline/cube.svg',
        //   label: 'Components',
        //   route: '/components',
        //   children: [{ label: 'Table', route: '/components/table' }],
        // },
      ],
    },
    {
      group: '',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'Konser',
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Tiyatro',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Müzikal',
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Stand Up',
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Ayarlar',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Bildirimler',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Diğer Etkinlikler',
          route: '/folders',
          children: [
            { label: 'Festival', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
