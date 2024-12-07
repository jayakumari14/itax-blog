import { formatDate } from '@/utils/utilityFunctions';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function ItemEdit({ post, onEdit, onDelete }) {
  const truncateContent = (content, words) => {
    if (content) {
      const contentArray = content.split(' ');
      if (contentArray.length > words) {
        return contentArray.slice(0, words).join(' ') + '...';
      }
      return content;
    }
  };

  return (
    <li className="rounded-md py-2 px-4 shadow-md border">
      <div className="flex gap-2">
        <Image
          src={post.imageUrl}
          alt="Post Image"
          className="mt-2 rounded-md w-[200px] aspect-video object-contain"
          width={200}
          height={100}
        />
        <div className="flex w-full">
          <div className="flex-1">
            <div className="px-2 py-1 font-medium text-txt text-xl">
              {post.title}
            </div>
            <p className="px-2 font-medium text-txt/90">
              {truncateContent(post.contentDescription, 10)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div
              onClick={() => {
                onEdit(post);
              }}
              className="border cursor-pointer border-blue-600 rounded-md p-1 text-xl hover:text-blue-500"
              title="edit"
            >
              <Icon icon="material-symbols:edit-outline" />
            </div>
            <div
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this')) {
                  return onDelete(post.id);
                }
              }}
              className="border cursor-pointer border-red-600 rounded-md p-1 text-xl hover:text-red-600"
              title="delete"
            >
              <Icon icon="material-symbols:delete-outline" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end my-2 text-sm text-slate-700">
        {formatDate(post.updatedAt)}
      </div>
    </li>
  );
}
