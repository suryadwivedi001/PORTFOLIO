export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      about_content: {
        Row: {
          bio: string | null
          id: string
          mission: string | null
          skills: string[] | null
          tools: string[] | null
          updated_at: string | null
          values: string[] | null
        }
        Insert: {
          bio?: string | null
          id?: string
          mission?: string | null
          skills?: string[] | null
          tools?: string[] | null
          updated_at?: string | null
          values?: string[] | null
        }
        Update: {
          bio?: string | null
          id?: string
          mission?: string | null
          skills?: string[] | null
          tools?: string[] | null
          updated_at?: string | null
          values?: string[] | null
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          password_hash: string
          updated_at: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          password_hash: string
          updated_at?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          password_hash?: string
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          category: string
          content: string | null
          created_at: string | null
          excerpt: string
          id: string
          is_featured: boolean | null
          is_published: boolean | null
          order_index: number | null
          published_date: string
          read_time: string
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          content?: string | null
          created_at?: string | null
          excerpt: string
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          order_index?: number | null
          published_date: string
          read_time: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          content?: string | null
          created_at?: string | null
          excerpt?: string
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          order_index?: number | null
          published_date?: string
          read_time?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_tags: {
        Row: {
          blog_id: string | null
          created_at: string | null
          id: string
          tag_id: string | null
        }
        Insert: {
          blog_id?: string | null
          created_at?: string | null
          id?: string
          tag_id?: string | null
        }
        Update: {
          blog_id?: string | null
          created_at?: string | null
          id?: string
          tag_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_tags_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      blogs: {
        Row: {
          author_name: string
          body_content: string | null
          cover_image_url: string | null
          created_at: string | null
          estimated_read_time: string | null
          excerpt: string | null
          id: string
          is_featured: boolean | null
          publish_date: string | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          status: string | null
          title: string
          updated_at: string | null
          word_count: number | null
        }
        Insert: {
          author_name: string
          body_content?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          estimated_read_time?: string | null
          excerpt?: string | null
          id?: string
          is_featured?: boolean | null
          publish_date?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          status?: string | null
          title: string
          updated_at?: string | null
          word_count?: number | null
        }
        Update: {
          author_name?: string
          body_content?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          estimated_read_time?: string | null
          excerpt?: string | null
          id?: string
          is_featured?: boolean | null
          publish_date?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          status?: string | null
          title?: string
          updated_at?: string | null
          word_count?: number | null
        }
        Relationships: []
      }
      project_tags: {
        Row: {
          created_at: string | null
          id: string
          project_id: string | null
          tag_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          project_id?: string | null
          tag_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          project_id?: string | null
          tag_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_tags_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          case_study_pdf_url: string | null
          category: string
          created_at: string | null
          description: string
          id: string
          image_url: string | null
          is_featured: boolean | null
          is_ongoing: boolean | null
          metrics: string | null
          order_index: number | null
          project_url: string | null
          repository_url: string | null
          status: string
          tags: string[] | null
          timeline_updates: Json | null
          title: string
          tools_used: string[] | null
          updated_at: string | null
        }
        Insert: {
          case_study_pdf_url?: string | null
          category: string
          created_at?: string | null
          description: string
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          is_ongoing?: boolean | null
          metrics?: string | null
          order_index?: number | null
          project_url?: string | null
          repository_url?: string | null
          status: string
          tags?: string[] | null
          timeline_updates?: Json | null
          title: string
          tools_used?: string[] | null
          updated_at?: string | null
        }
        Update: {
          case_study_pdf_url?: string | null
          category?: string
          created_at?: string | null
          description?: string
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          is_ongoing?: boolean | null
          metrics?: string | null
          order_index?: number | null
          project_url?: string | null
          repository_url?: string | null
          status?: string
          tags?: string[] | null
          timeline_updates?: Json | null
          title?: string
          tools_used?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      resume_content: {
        Row: {
          certifications: string[] | null
          education: Json | null
          id: string
          pdf_url: string | null
          skills: string[] | null
          tools: string[] | null
          updated_at: string | null
          work_experience: Json | null
        }
        Insert: {
          certifications?: string[] | null
          education?: Json | null
          id?: string
          pdf_url?: string | null
          skills?: string[] | null
          tools?: string[] | null
          updated_at?: string | null
          work_experience?: Json | null
        }
        Update: {
          certifications?: string[] | null
          education?: Json | null
          id?: string
          pdf_url?: string | null
          skills?: string[] | null
          tools?: string[] | null
          updated_at?: string | null
          work_experience?: Json | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          color: string | null
          created_at: string | null
          id: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_slug: {
        Args: { title: string }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
