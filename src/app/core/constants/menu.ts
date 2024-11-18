import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: '',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/home.svg', 
          label: 'Tüm Etkinlikler',
          route: '/etkinlikler',
        },
        // {
        //   icon: 'assets/icons/heroicons/outline/music-note.svg', 
        //   label: 'Konser',
        //   route: '/konserler',
        // },
        // {
        //   icon: 'assets/icons/heroicons/outline/theater-masks.svg', 
        //   label: 'Tiyatro',
        //   route: '/tiyatrolar',
        // },
        // {
        //   icon: 'assets/icons/heroicons/outline/microphone.svg', 
        //   label: 'Müzikal',
        //   route: '/musicals',
        // },
        // {
        //   icon: 'assets/icons/heroicons/outline/smile.svg', 
        //   label: 'Stand Up',
        //   route: '/activity',
        // },
        // {
        //   icon: 'assets/icons/heroicons/outline/festival.svg', 
        //   label: 'Festival',
        //   route: '/activity',
        // },
        {
          icon: 'assets/icons/heroicons/outline/plus-circle.svg', 
          label: 'Kendi Etkinliğini Oluştur!',
          route: '/etkinlik-olustur',
          // children: [
          //   { label: 'Kurumsal Etkinlik Oluştur', route: '/etkinlik-olustur' },
          //   { label: 'Bireysel Etkinlik Oluştur', route: '/etkinlik-olustur' },
          // ],
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg', 
          label: 'Biletlerim',
          route: '/notifications',
        },
        {
          icon: 'assets/icons/heroicons/outline/settings.svg', 
          label: 'Ayarlar',
          route: '/settings',
        },
      ],
    },
  ];
}
