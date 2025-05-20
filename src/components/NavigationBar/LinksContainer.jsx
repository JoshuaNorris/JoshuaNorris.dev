import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import { useMediaQuery } from 'react-responsive';

export default function LinksContainer() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile
        ? <MobileNavigation />
        : <DesktopNavigation />
}