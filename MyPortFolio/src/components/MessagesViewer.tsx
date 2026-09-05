import { useEffect, useState } from 'react';
import { Mail, Trash2, Clock, User, MessageSquare, RefreshCw } from 'lucide-react';

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function MessagesViewer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/messages');
      const data = await res.json();
      if (data.success) {
        setMessages(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch messages:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
      }
    } catch (err) {
      console.error('Failed to delete message:', err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <section className="py-16 max-w-5xl mx-auto px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
            <MessageSquare className="text-brand w-7 h-7" />
            Inbox Messages ({messages.length})
          </h2>
          <p className="text-gray-400 text-sm">All messages received through your portfolio contact form.</p>
        </div>
        <button
          onClick={fetchMessages}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card glass-card-hover text-sm text-gray-300 hover:text-white"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {messages.length === 0 ? (
        <div className="glass-card p-12 text-center text-gray-400">
          <Mail className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>No messages received yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="glass-card p-6 border border-white/[0.08] hover:border-brand/40 transition-all rounded-2xl flex flex-col md:flex-row justify-between gap-4"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-white font-semibold flex items-center gap-1.5 text-base">
                    <User className="w-4 h-4 text-brand-light" />
                    {msg.name}
                  </span>
                  <a href={`mailto:${msg.email}`} className="text-xs text-brand-light hover:underline">
                    {msg.email}
                  </a>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {new Date(msg.createdAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>

                <h4 className="text-sm font-medium text-gray-200">
                  <span className="text-gray-400">Subject:</span> {msg.subject}
                </h4>

                <p className="text-sm text-gray-300 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                  {msg.message}
                </p>
              </div>

              <div className="self-end md:self-center">
                <button
                  onClick={() => deleteMessage(msg._id)}
                  className="p-2.5 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                  title="Delete message"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}