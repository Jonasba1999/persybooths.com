import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } from "overlayscrollbars";

export function overlayScrollbar() {
	// Simple initialization with an element
	window.osInstance = OverlayScrollbars(document.body, {});
}
