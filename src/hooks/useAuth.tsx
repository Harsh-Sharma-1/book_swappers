import { supabase } from "@/services";
import { Session, User } from "@supabase/supabase-js";
import { use, useEffect, useState } from "react";

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const userSetter = (session: Session | null) => {
        if (session) {
            if (session?.user) {
                setUser(session.user);
            } else {
                setUser(null);
            }
        } else {
            setUser(null);
        }
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            userSetter(session);
            setLoading(false);
        });
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((e, session) => {
            setLoading(true);
            userSetter(session);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    return {
        user: user as User,
        loading,
    };
};
