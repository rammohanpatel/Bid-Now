import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { ChevronDown, Clock, DollarSign, Users, Zap, Check, X, UserPlus, Loader,Bell,User,Tag,TrendingUp,Award,Calendar,Archive} from 'angular-feather/icons';

const icons = {
  ChevronDown,
  Clock,
  DollarSign,
  Users,
  Zap,
  Check,
  X,
  UserPlus,
  Loader,
  Bell,
  User,
  Tag,
  TrendingUp,
  Award,
  Calendar,
  Archive 
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
