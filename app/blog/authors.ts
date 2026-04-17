export interface Author {
  name: string;
  bio: string;
  avatar?: string;
  twitter?: string;
  github?: string;
  website?: string;
}

export const authors: Record<string, Author> = {
  arman: {
    name: 'Arman Khan',
    bio: 'Founding Principal Engineer at Somethings. Building a mentorship platform connecting teens with mentors.',
    avatar: 'https://github.com/iarmankhan.png',
    twitter: 'codingwitharman',
    github: 'iarmankhan',
  },
  nick: {
    name: 'Nick Gattuso',
    bio: 'Engineer at Somethings.',
    avatar: 'https://github.com/nickgattuso.png',
    github: 'nickgattuso',
  },
};
