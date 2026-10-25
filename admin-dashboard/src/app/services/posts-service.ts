import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';
import { postResponse } from '../data/post';

@Service()
export class PostsService {
    readonly posts = httpResource<postResponse>(() => 'https://dummyjson.com/posts?limit=0');
}
