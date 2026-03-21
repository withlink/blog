export interface Author {
  name: string;
  bio: string;
  twitter?: string;
  github?: string;
  website?: string;
}

export const authors: Record<string, Author> = {
  arman: {
    name: 'Arman Khan',
    bio: 'Founding Principal Engineer at Somethings. Building a mentorship platform connecting teens with mentors.',
    twitter: 'codingwitharman',
    github: 'iarmankhan',
  },
};
