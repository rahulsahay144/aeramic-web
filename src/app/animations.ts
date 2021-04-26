import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group
} from '@angular/animations';

import {
  bounce,
  flash,
  pulse,
  rubberBand,
  shake,
  swing,
  tada,
  wobble,
  jello,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInUp,
  fadeInUpBig,
  fadeOut,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutUp,
  fadeOutUpBig,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  lightSpeedIn,
  lightSpeedOut,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  slideInUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideOutUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
  hinge,
  jackInTheBox,
  rollIn,
  rollOut
} from 'ngx-animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%'})
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    transition('* <=> JoinUs', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%'})
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ]);

  export function getAnimations(): any[] {
    const animations = [];
  
    animations['bounce'] = bounce;
    animations['flash'] = flash;
    animations['pulse'] = pulse;
    animations['rubberBand'] = rubberBand;
    animations['shake'] = shake;
    animations['swing'] = swing;
    animations['tada'] = tada;
    animations['wobble'] = wobble;
    animations['jello'] = jello;
    animations['bounceIn'] = bounceIn;
    animations['bounceInDown'] = bounceInDown;
    animations['bounceInLeft'] = bounceInLeft;
    animations['bounceInRight'] = bounceInRight;
    animations['bounceInUp'] = bounceInUp;
    animations['bounceOut'] = bounceOut;
    animations['bounceOutDown'] = bounceOutDown;
    animations['bounceOutLeft'] = bounceOutLeft;
    animations['bounceOutRight'] = bounceOutRight;
    animations['bounceOutUp'] = bounceOutUp;
    animations['fadeIn'] = fadeIn;
    animations['fadeInDown'] = fadeInDown;
    animations['fadeInDownBig'] = fadeInDownBig;
    animations['fadeInLeft'] = fadeInLeft;
    animations['fadeInLeftBig'] = fadeInLeftBig;
    animations['fadeInRight'] = fadeInRight;
    animations['fadeInRightBig'] = fadeInRightBig;
    animations['fadeInUp'] = fadeInUp;
    animations['fadeInUpBig'] = fadeInUpBig;
    animations['fadeOut'] = fadeOut;
    animations['fadeOutDown'] = fadeOutDown;
    animations['fadeOutDownBig'] = fadeOutDownBig;
    animations['fadeOutLeft'] = fadeOutLeft;
    animations['fadeOutLeftBig'] = fadeOutLeftBig;
    animations['fadeOutRight'] = fadeOutRight;
    animations['fadeOutRightBig'] = fadeOutRightBig;
    animations['fadeOutUp'] = fadeOutUp;
    animations['fadeOutUpBig'] = fadeOutUpBig;
    animations['flip'] = flip;
    animations['flipInX'] = flipInX;
    animations['flipInY'] = flipInY;
    animations['flipOutX'] = flipOutX;
    animations['flipOutY'] = flipOutY;
    animations['lightSpeedIn'] = lightSpeedIn;
    animations['lightSpeedOut'] = lightSpeedOut;
    animations['rotateIn'] = rotateIn;
    animations['rotateInDownLeft'] = rotateInDownLeft;
    animations['rotateInDownRight'] = rotateInDownRight;
    animations['rotateInUpLeft'] = rotateInUpLeft;
    animations['rotateInUpRight'] = rotateInUpRight;
    animations['rotateOut'] = rotateOut;
    animations['rotateOutDownLeft'] = rotateOutDownLeft;
    animations['rotateOutDownRight'] = rotateOutDownRight;
    animations['rotateOutUpLeft'] = rotateOutUpLeft;
    animations['rotateOutUpRight'] = rotateOutUpRight;
    animations['slideInUp'] = slideInUp;
    animations['slideInDown'] = slideInDown;
    animations['slideInLeft'] = slideInLeft;
    animations['slideInRight'] = slideInRight;
    animations['slideOutUp'] = slideOutUp;
    animations['slideOutDown'] = slideOutDown;
    animations['slideOutLeft'] = slideOutLeft;
    animations['slideOutRight'] = slideOutRight;
    animations['zoomIn'] = zoomIn;
    animations['zoomInDown'] = zoomInDown;
    animations['zoomInLeft'] = zoomInLeft;
    animations['zoomInRight'] = zoomInRight;
    animations['zoomInUp'] = zoomInUp;
    animations['zoomOut'] = zoomOut;
    animations['zoomOutDown'] = zoomOutDown;
    animations['zoomOutLeft'] = zoomOutLeft;
    animations['zoomOutRight'] = zoomOutRight;
    animations['zoomOutUp'] = zoomOutUp;
    animations['hinge'] = hinge;
    animations['jackInTheBox'] = jackInTheBox;
    animations['rollIn'] = rollIn;
    animations['rollOut'] = rollOut;
  
    return animations;
  }