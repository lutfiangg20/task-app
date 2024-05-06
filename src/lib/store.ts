import create from "zustand";

interface SidebarState {
  isOpen: boolean;
  toggle: (by: boolean) => void;
}

const useSidebar = create<SidebarState>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebar;
