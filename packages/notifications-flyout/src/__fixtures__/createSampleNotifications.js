import React from "react";
import TextLink from "@hig/text-link";
import Timestamp from "@hig/timestamp";

export default function createSampleNotifications({ baseDate = new Date() }) {
  const updatedDate1 = baseDate.setMinutes(baseDate.getMinutes() - 3);
  const updatedDate2 = baseDate.setHours(baseDate.getHours() - 2);
  const updatedDate3 = baseDate.setHours(baseDate.getHours() - 24);
  const updatedDate4 = baseDate.setMinutes(baseDate.getMinutes() - 20);

  return [
    {
      id: "featured",
      featured: true,
      unread: true,
      timestamp: <Timestamp timestamp={new Date(updatedDate1).toISOString()} />,
      content: (
        <div>
          <p>
            <b>Your subscription expires May 5</b>
          </p>
          <p>
            Maya
            <br />
            Media & Entertainment Collection
            <br />
            Product Design Collection
            <br />2 more
          </p>
          <p>
            <TextLink
              link="https://github.com/Autodesk/hig"
              onClick={() => {
                console.log("notifications id 1");
              }}
            >
              Manage renewal
            </TextLink>
          </p>
        </div>
      )
    },
    {
      id: "0",
      unread: true,
      timestamp: <Timestamp timestamp={new Date(updatedDate1).toISOString()} />,
      type: "primary",
      content: (
        <div>
          <p>
            <b>Your subscription expires May 5</b>
          </p>
          <p>
            Maya
            <br />
            Media & Entertainment Collection
            <br />
            Product Design Collection
            <br />2 more
          </p>
          <p>
            <TextLink
              link="https://github.com/Autodesk/hig"
              onClick={() => {
                console.log("notifications id 1");
              }}
            >
              Manage renewal
            </TextLink>
          </p>
        </div>
      )
    },
    {
      id: "1",
      unread: true,
      timestamp: <Timestamp timestamp={new Date(updatedDate2).toISOString()} />,
      type: "success",
      content: (
        <div>
          <p>
            <b>Your subscription expires April 20</b>
          </p>
          <p>
            AutoCAD
            <br />
            Architecture Construction Engineering Collection
            <br />
            Product Design Collection
            <br />
          </p>
          <p>
            <TextLink
              link="https://github.com/Autodesk/hig"
              onClick={() => {
                console.log("notifications id 2");
              }}
            >
              Manage renewal
            </TextLink>
          </p>
        </div>
      )
    },
    {
      id: "3",
      unread: true,
      timestamp: <Timestamp timestamp={new Date(updatedDate3).toISOString()} />,
      type: "error",
      content: (
        <div>
          <p>
            <b>Your subscription expires June 15</b>
          </p>
          <p>
            AutoCAD
            <br />
            Architecture Construction Engineering Collection
            <br />
            HIG
            <br />
          </p>
          <p>
            <TextLink
              link="https://github.com/Autodesk/hig"
              onClick={() => {
                console.log("notifications id 2");
              }}
            >
              Manage Renewal
            </TextLink>
          </p>
        </div>
      )
    },
    {
      id: "4",
      unread: true,
      timestamp: <Timestamp timestamp={new Date(updatedDate4).toISOString()} />,
      type: "warning",
      content: (
        <div>
          <p>
            <b>Your subscription expires June 15</b>
          </p>
          <p>A new version of Autodesk Revit is available for download.</p>
          <p>
            <TextLink
              link="https://github.com/Autodesk/hig"
              onClick={() => {
                console.log("notifications id 2");
              }}
            >
              Manage renewal
            </TextLink>
          </p>
        </div>
      )
    }
  ];
}
