import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import SidebarControll from "../SIdebarControll";
const Navbar = () => {
  return (
    <div className="flex justify-between p-4 w-full">
      <SidebarControll />
      <div>
        <ul className="flex flex-row gap-5 mx-4">
          <li>
            <a href="">menu1</a>
          </li>
          <li>
            <a href="">menu2</a>
          </li>
          <li>
            <a href="">menu3</a>
          </li>
          <li>
            <a href="">menu4</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
