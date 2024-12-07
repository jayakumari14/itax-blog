'use client';

// import { IoMdClose } from 'react-icons/io';
// import ReactModal from 'react-modal';
import Pagination from '@/components/navigation/Pagination';
import { useState, useEffect, useCallback } from 'react';
import ItemEdit from './PostItem';
import { H3 } from '@/components/pagesComponents/pageLayout/Headings';
import Section from '@/components/ui/Section';
import Button, { BTN_SIZES } from '@/components/ui/Button';
import FlexContainer from '@/components/pagesComponents/pageLayout/FlexContainer';
import CreateBlogPost from './CreateBlogPost';
import Modal from '@/components/ui/Modal';
import { toast } from 'react-toastify';
import userAxios from '@/lib/userAxios';
import Loader from '@/components/partials/loading/Loader';
import ReactSelect from 'react-select';

export default function BlogPosts() {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState({ label: 5, value: 5 });
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get(
        `/blog/posts?page=${currentPage}&limit=${limit.value}`,
      );
      if (status === 200) {
        return setPosts(data?.data);
      }
    } catch (error) {
      console.log('🚀 ~ getPosts ~ error:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, [limit.value, currentPage]);

  const handleModalToggle = () => setModal(!modal);

  const refresh = () => getPosts();

  const onEdit = (post) => {
    handleModalToggle();
    setCurrentPost(post);
  };

  const onDelete = async (id) => {
    try {
      setIsLoading(true);
      const { status } = await userAxios.delete(`/blog/posts/${id}`);
      if (status === 200) {
        refresh();
        toast.success('Successfully deleted');
      }
    } catch (error) {
      toast.error('Error deleting post');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, [currentPage, getPosts, limit]);

  return (
    <>
      <Section>
        {isLoading ? (
          <div className="flex justify-center items-center h-[75vh]">
            <Loader />
          </div>
        ) : (
          <>
            <FlexContainer>
              <H3 className="text-slate-800">Blog Posts</H3>

              <Button
                onClick={handleModalToggle}
                className={'min-w-fit'}
                size={BTN_SIZES['md-1']}
              >
                Create Post
              </Button>
            </FlexContainer>

            <Modal
              title={currentPost ? 'Update Post' : 'Create Post'}
              onClose={() => {
                if (currentPost) {
                  setCurrentPost(null);
                }
                setModal(false);
              }}
              className={'p-3'}
              isOpen={modal}
            >
              <CreateBlogPost
                onClose={() => {
                  if (currentPost) {
                    setCurrentPost(null);
                  }
                  setModal(false);
                }}
                data={currentPost}
                refresh={refresh}
              />
            </Modal>
            <ul className="px-2 py-4 grid md:grid-cols-2 gap-4">
              {posts &&
                posts.posts?.map((post, index) => {
                  return (
                    <ItemEdit
                      key={index}
                      post={post}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  );
                })}
            </ul>
            <div className="flex items-center justify-end p-6">
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={(posts && posts?.pages) || 10}
              />
              <ReactSelect
                placeholder="Rows"
                value={limit}
                onChange={(option) => setLimit(option)}
                options={Array.from({ length: 4 }).map((n, i) => {
                  return { value: (i + 1) * 5, label: (i + 1) * 5 };
                })}
              />
            </div>
          </>
        )}
      </Section>
    </>
  );
}
