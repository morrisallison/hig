import React from "react";
import { mount } from "enzyme";

import createSampleNotifications from "../__fixtures__/createSampleNotifications";
import NotificationFlyoutBehavior from "./NotificationFlyoutBehavior";

describe("notification-flyout/behaviors/NotificationFlyoutBehavior", () => {
  const baseDate = new Date("2018-08-20T18:58:55.441Z");
  const children = jest.fn();

  function mountBehavior() {
    return mount(
      <NotificationFlyoutBehavior
        notifications={createSampleNotifications({ baseDate })}
      >
        {children}
      </NotificationFlyoutBehavior>
    );
  }

  beforeEach(() => {
    children.mockReturnValue(<div />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders", () => {
    mountBehavior();
  });

  describe("render prop payload", () => {
    let payload;
    let wrapper;

    beforeEach(() => {
      wrapper = mountBehavior();
      payload = children.mock.calls[0][0];
    });

    it("provides a payload to the `children` render prop", () => {
      expect(payload).toMatchObject({
        dismissNotification: expect.any(Function),
        handleClose: expect.any(Function),
        notifications: expect.any(Array),
        showUnreadCount: true,
        unreadCount: 5
      });
      expect(payload.notifications).toMatchSnapshot();
    });

    it("normalizes notifications", () => {
      expect(payload.notifications).toMatchSnapshot();
    });

    describe("dismissNotification", () => {
      function expectToHaveNotificationTimes(length) {
        const { notifications } = children.mock.calls.slice(-1)[0][0];

        expect(notifications).toHaveLength(length);
      }

      it("filters out the notification of the given ID", () => {
        const { dismissNotification } = payload;

        expectToHaveNotificationTimes(5);
        dismissNotification("featured");
        expectToHaveNotificationTimes(4);
        dismissNotification("featured");
        expectToHaveNotificationTimes(4);
      });
    });

    describe("handleClose", () => {
      function expectToHaveUnreadNotificationTimes(length) {
        const { notifications } = children.mock.calls.slice(-1)[0][0];
        const unreadNotifications = notifications.filter(
          ({ unread }) => unread
        );

        expect(unreadNotifications).toHaveLength(length);
      }

      it("marks all notifications as read", () => {
        const { handleClose } = payload;

        expectToHaveUnreadNotificationTimes(5);
        handleClose();
        expectToHaveUnreadNotificationTimes(0);
      });

      it("updates the unread count", () => {
        const { handleClose } = payload;

        expect(children).toHaveBeenLastCalledWith(
          expect.objectContaining({ unreadCount: 5 })
        );

        handleClose();

        expect(children).toHaveBeenLastCalledWith(
          expect.objectContaining({ unreadCount: 0 })
        );
      });
    });

    describe("unreadCount", () => {
      it("is derived from the given notifications", () => {
        expect(payload.unreadCount).toEqual(5);
      });

      describe("when controlled", () => {
        it("it references the `unreadCount` prop", () => {
          const unreadCount = 3;

          wrapper.setProps({ unreadCount });

          expect(children).toHaveBeenLastCalledWith(
            expect.objectContaining({ unreadCount })
          );
        });
      });
    });
  });
});
