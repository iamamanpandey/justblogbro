import { mergeResolvers } from '@graphql-tools/merge';
import Category from './category';
import Author from './author';
import Post from './post';

export default mergeResolvers([
   Author,
   Post,
   Category
]);