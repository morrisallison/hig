import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT,
  COLOR
} from "../../consts/types";

export default {
  // General
  "button.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.large"
    }
  },
  "button.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "button.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "button.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.medium"
    }
  },
  "button.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "button.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "basics.fontSizes.mediumMedium"
    }
  },
  "button.gutter": {
    type: LENGTH,
    /** @todo */
    comment: `
      The space between elements with the component.
      E.g. The space between an icon and label within a button.`
  },
  "button.horizontalPadding": {
    type: LENGTH,
    value: {
      ref: "basics.spacings.mediumMedium"
    }
  },
  "button.minimumWidth": {
    type: LENGTH,
    value: "10px"
    /** @todo */
  },
  "button.verticalPadding": {
    type: LENGTH,
    value: {
      ref: "basics.spacings.mediumMedium"
    }
  },

  /**
   * ## States
   *
   * ### Default
   */
  "button.halo.width": {
    type: LENGTH,
    value: {
      ref: "basics.spacings.mediumMedium"
    }
  },

  /**
   * ### Hover
   */
  "button.hover.halo.width": {
    type: LENGTH,
    value: {
      ref: "basics.spacings.mediumMedium"
    }
  },

  /**
   * ### Focus
   */
  "button.focus.halo.width": {
    type: LENGTH,
    value: {
      ref: "basics.spacings.mediumMedium"
    }
  },

  /**
   * ### Pressed
   */
  "button.pressed.halo.width": {
    type: LENGTH,
    value: {
      ref: "basics.spacings.mediumMedium"
    }
  },

  /**
   * ## Variants
   *
   * ### Outline
   *
   * #### Default
   */
  // "button.outline.backgroundColor": {
  //   type: COLOR,
  //   value: {
  //     ref: "basics.colors.autodeskBlue500"
  //   }
  // },
  "button.outline.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Hover
   */
  "button.outline.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.hover.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.hover.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Focus
   */
  "button.outline.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.focus.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.focus.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Pressed
   */
  "button.outline.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.pressed.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.pressed.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Disbled
   */
  "button.outline.disabled.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.disabled.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.disabled.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.disabled.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.disabled.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * ### Solid
   *
   * #### Default
   */
  "button.solid.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Hover
   */
  "button.solid.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.hover.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.hover.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Focus
   */
  "button.solid.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.focus.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.focus.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Pressed
   */
  "button.solid.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.pressed.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.pressed.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Disabled
   */
  "button.solid.disabled.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.disabled.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.disabled.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.disabled.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.disabled.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * ### Flat
   *
   * #### Default
   */
  "button.flat.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Hover
   */
  "button.flat.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.hover.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.hover.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Focus
   */
  "button.flat.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.focus.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.focus.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Pressed
   */
  "button.flat.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.pressed.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.pressed.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * #### Disabled
   */
  "button.flat.disabled.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.disabled.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.disabled.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.disabled.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.flat.disabled.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  }
};
