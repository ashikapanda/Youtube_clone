import React from "react";
import data from "../dummyResponse/sidebarMenu.json";
import { ICONS } from "../utils/constants";
import { useSelector } from "react-redux";

function SideMenu() {
  const showMenu = useSelector((store) => store.app.sideMenu);
  data?.items.map((item) => {
    if (item?.guideSigninPromoRenderer) {
      item.guideSectionRenderer = {
        items: [
          {
            guideEntryRenderer: {
              formattedTitle: item?.guideSigninPromoRenderer?.descriptiveText,
            },
          },
        ],
      };
    }
  });

  // console.log("sign", signInPromo);

  return (
    showMenu && (
      <div className="w-64 p-5 shadow-lg">
        {data?.items.map((item, index) => (
          <ul key={index}>
            <h1 className="text-lg font-semibold">
              {item?.guideSectionRenderer?.formattedTitle?.simpleText}
            </h1>
            {item?.guideSectionRenderer?.items.map((sectionItem) => (
              <li
                key={
                  sectionItem?.guideEntryRenderer?.formattedTitle?.simpleText
                }
                className="flex"
              >
                {sectionItem?.guideEntryRenderer?.icon?.iconType && (
                  <img
                    src={ICONS[sectionItem?.guideEntryRenderer?.icon?.iconType]}
                    alt="sectionIcon"
                    className="w-8"
                  />
                )}
                <h2 className="text-lg p-2 text-wrap">
                  {sectionItem?.guideEntryRenderer?.formattedTitle?.simpleText}
                </h2>
              </li>
            ))}
            <hr className="m-2" />
          </ul>
        ))}
      </div>
    )
  );
}

export default SideMenu;
