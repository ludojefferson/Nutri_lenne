import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INSTAGRAM_POSTS, CLINIC_INFO } from '../data/content';
import { Instagram, Heart, MessageCircle, ExternalLink, X, Sparkles } from 'lucide-react';
import { InstagramPost } from '../types';

export const InstagramFeed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section id="galeria" className="py-20 bg-[#FAF9F5] border-y border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 text-[#3f6212] text-xs font-semibold uppercase tracking-wider mb-2">
              <Instagram className="w-3.5 h-3.5" /> @nutri.lane no Instagram
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Acompanhe dicas diárias e bastidores
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Receitas práticas, mitos da nutrição e motivação para o seu dia a dia.
            </p>
          </div>

          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-bold rounded-2xl text-xs shadow-md transition-all flex items-center gap-2 shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir @nutri.lane</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Instagram Grid Feed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedPost(post)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 cursor-pointer transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img
                  src={post.imageUrl}
                  alt="Post Nutri Lane"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white p-4">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{post.commentsCount}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white">
                <p className="text-stone-700 text-xs line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] text-stone-400">
                  <span>{post.date}</span>
                  <span className="text-[#3f6212] font-semibold group-hover:underline">Ver no Instagram</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Post Modal Preview */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 p-2 text-white bg-stone-900/50 hover:bg-stone-900 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 aspect-square bg-stone-900">
                <img
                  src={selectedPost.imageUrl}
                  alt="Post completo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#3f6212] text-white flex items-center justify-center font-bold text-xs">
                      NL
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 text-xs">@nutri.lane</p>
                      <p className="text-[10px] text-stone-400">Instagram Post • {selectedPost.date}</p>
                    </div>
                  </div>

                  <p className="text-stone-700 text-xs leading-relaxed max-h-48 overflow-y-auto">
                    {selectedPost.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-600 font-semibold">
                    <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-pink-600 fill-pink-600" /> {selectedPost.likes} curtidas</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4 text-stone-400" /> {selectedPost.commentsCount} comentários</span>
                  </div>

                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#3f6212] hover:bg-[#365314] text-white text-xs font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Comentar e Curtir no Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
