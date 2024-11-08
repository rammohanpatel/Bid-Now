import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { ChevronDown, Clock, DollarSign, Users, Zap, Check, X } from 'angular-feather/icons';

const icons = {
  ChevronDown,
  Clock,
  DollarSign,
  Users,
  Zap,
  Check,
  X,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports : [
    FeatherModule
  ]
})
export class IconsModule { }
