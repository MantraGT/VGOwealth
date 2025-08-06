import { DefineComponent } from 'vue';

declare const Header: DefineComponent<{
  // Component props
}, {
  // Component methods
  toggleSidebar: (e: Event) => void;
}, any, any, {
  // Emits
  'toggle-sidebar': (isOpen: boolean) => void;
}>;

export default Header;
