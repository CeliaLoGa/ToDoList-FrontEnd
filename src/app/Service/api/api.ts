export * from './taskById.service';
import { TaskByIdService } from './taskById.service';
export * from './tasks.service';
import { TasksService } from './tasks.service';
export const APIS = [TaskByIdService, TasksService];
