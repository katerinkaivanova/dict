{
  "type": "list_card",
  "cells": [
    {
      "type": "text_cell_view",
      "content": {
        "text": "Делайте переводы за рубеж в СберБанк Онлайн",
        "typeface": "headline3",
        "text_color": "default",
        "max_lines": 2
      },
      "paddings": {
        "top": "6x",
        "right": "8x",
        "bottom": "8x",
        "left": "8x"
      }
    },
    {
      "type": "left_right_cell_view",
      "divider": {
        "style": "default",
        "size": "d5"
      },
      "paddings": {
        "left": "0x",
        "top": "6x",
        "right": "0x",
        "bottom": "8x"
      },
      "left": {
        "type": "simple_left_view",
        "icon": {
          "address": {
            "type": "local",
            "identificator": "receipt"
          },
          "size": {
            "width": "medium",
            "height": "medium"
          },
          "margins": {
            "top": "5x",
            "right": "6x",
            "bottom": "5x",
            "left": "8x"
          },
          "tint_color": "solid_brand"
        },
        "title": {
          "text": "Оплата по номеру квитанции",
          "typeface": "body1",
          "text_color": "default",
          "max_lines": 1,
          "margins": {
            "top": "9x",
            "bottom": "9x",
            "left": "8x"
          }
        }
      },
      "right": {
        "type": "disclosure_right_view",
        "margins": {
          "top": "8x",
          "right": "4x",
          "bottom": "8x"
        }
      },
      "actions": [
        {
          "type": "deep_link",
          "deep_link": "sberbankonline://payments/services?cs=83726529076&t=0J7Qv9C70LDRgtCwINGI0YLRgNCw0YTQsCDQv9C-INCj0JjQnQ"
        }
      ]
    },
    {
      "type": "left_right_cell_view",
      "paddings": {
        "left": "0x",
        "top": "6x",
        "right": "0x",
        "bottom": "8x"
      },
      "left": {
        "type": "simple_left_view",
        "icon": {
          "address": {
            "type": "local",
            "identificator": "qr_code"
          },
          "size": {
            "width": "medium",
            "height": "medium"
          },
          "margins": {
            "top": "5x",
            "right": "6x",
            "bottom": "5x",
            "left": "8x"
          },
          "tint_color": "solid_brand"
        },
        "title": {
          "text": "Оплата по QR или штрихкоду",
          "typeface": "body1",
          "text_color": "default",
          "max_lines": 1,
          "margins": {
            "top": "9x",
            "bottom": "9x",
            "left": "8x"
          }
        }
      },
      "right": {
        "type": "disclosure_right_view",
        "margins": {
          "top": "8x",
          "right": "4x",
          "bottom": "8x"
        }
      },
      "actions": [
        {
          "type": "deep_link",
          "deep_link": "sberbankonline://payments/open-barcodescanner"
        }
      ]
    }
  ]
}
